// Arquivo: src/app/page.js
import { supabase } from '@/lib/supabaseClient'

export default function Login() {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'teste@farmacia.com', // Use o email que você criou
      password: 'senha123'
    })
    if (!error) alert('Login feito!') // Teste simples
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Farmácia</h1>
      <button 
        onClick={handleLogin}
        style={{ background: 'blue', color: 'white', padding: 10 }}
      >
        Entrar
      </button>
    </div>
  )
}