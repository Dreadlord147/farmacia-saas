// Arquivo: src/app/cadastro/page.js
'use client'
import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

export default function CadastroProduto() {
  const [produto, setProduto] = useState({
    nome: '',
    lote: '',
    quantidade: 1,
    data_validade: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('produtos')
      .insert([{
        ...produto,
        farmacia_id: (await supabase.auth.getUser()).data.user.id
      }])
    
    if (!error) {
      alert('Produto cadastrado!')
      setProduto({
        nome: '',
        lote: '',
        quantidade: 1,
        data_validade: ''
      })
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Nome do Produto:</label>
          <input
            value={produto.nome}
            onChange={(e) => setProduto({...produto, nome: e.target.value})}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Lote:</label>
          <input
            value={produto.lote}
            onChange={(e) => setProduto({...produto, lote: e.target.value})}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Quantidade:</label>
          <input
            type="number"
            value={produto.quantidade}
            onChange={(e) => setProduto({...produto, quantidade: e.target.value})}
            style={{ width: '100%', padding: 8 }}
            min="1"
            required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Data de Validade:</label>
          <input
            type="date"
            value={produto.data_validade}
            onChange={(e) => setProduto({...produto, data_validade: e.target.value})}
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            background: 'green',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            width: '100%'
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}