import './index.css'
import img_insta from './img/insta-img.png'
import logo_insta from './img/insta-logo.png'
import microsoft from './img/microsoft.png'
import google from './img/google.png'

function App() {

  return (
      <div>
        <div className='h-screen w-screen grid col-span-full grid-row-6 md:grid-cols-2'>
          <div className='row-span-5 md:flex justify-end hidden'>
            <img className=" max-w-md" src={img_insta} alt="" />
          </div>

          <div className=' row-span-5 flex flex-col justify-center items-center grip-cols-1'>
            <form className=' mx-auto w-96 flex flex-col justify-center items-center justify-self-center col-span-full border rounded-sn px-10 py-4 gap-3' action="#">
              <img src={logo_insta} className='w-52 m-auto' alt="" />
              
              <input className='bg-gray-50 h-11 w-full pl-3 border rounded-sm outline-none' type="text" name="" id="" placeholder='Numero de telefone, e-mail'/>
              <input className='bg-gray-50 h-11 w-full pl-3 border rounded-sm outline-none' type="text" name="" id="" placeholder='Senha'/>

              <button className='bg-blue-400 text-gray-50 h-9 w-full hover:bg-blue-300' type='submit'>Entrar</button>

              <a href="#" className='text-center font-bold text-blue-400 m-4 hover:text-blue-800'>Iniciar sessão com o Facebook</a>
              <p className='text-sm text-center text-blue-800 mb-3 cursor-pointer'>Esqueceste-te da palavra-passe</p>
           </form>

            <div className='w-96 h-16 my-4 border text-center py-4'>
              <p>Nao tem conta? <a href="" className='font-bold text-blue-500'>Cadastrar-se</a></p>
            </div>

              <p>Baixe o aplicativo</p>

              <div className='flex justify-center gap-2 my-4'>
                <img className='h-12' src={google} alt="" />
                <img className='h-12' src={microsoft} alt="" />
              </div>
            </div>
            <div className='text-sm text-gray-600 row-span-1 col-span-2'>
              <ul className='flex flex-wrap gap-5 justify-center'>
                <li>Meta</li>
                <li>Sobre</li>
                <li>Blogue</li>
                <li>Empregos</li>
                <li>Ajuda</li>
                <li>API</li>
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Localizações</li>
                <li>Instagram Lite</li>
                <li>Threads</li>
                <li>Carregamento de contactos e não utilizadores</li>
                <li>Verificação Meta</li>
              </ul>
              <ul className='flex flex-wrap gap-5 justify-center mt-5'>
                <li>Português (Portugal)</li>
                <li>©2025 Instagram from Meta</li> 
              </ul>
            </div>
              
          </div>

        </div>
  )
}

export default App
