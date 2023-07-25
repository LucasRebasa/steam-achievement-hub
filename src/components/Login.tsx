const Login: React.FC = () => {
  return (
    <div className="h-screen flex flex-wrap justify-center content-center bg-[url('/src/assets/large-triangles.png')] bg-repeat text-white">
      <form className="flex flex-col justify-center border-solid border border-gray-800 bg-gray-800/90 border-gray-400 rounded-md basis-1/3 p-8">
        <div className="flex flex-col">
          <h4 className="text-center font-bold mb-2 mt-[-1em]">Inicia sesion con</h4>
          <button className="bg-gray-700 hover:bg-gray-900 rounded-md text-gray-200 p-1 "><i className="fa-brands fa-steam"></i> Iniciar o crear cuenta con Steam</button>
        </div>
        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
        <h2 className="text-center font-bold text-lg justify-items-start">
          Ingresa tus credenciales
        </h2>
        <div className="flex flex-col">
          <label>Mail</label>
          <input
            type="text"
            placeholder="Ingrese su mail"
            className="p-2 border-b-2 text-black focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label>Contraseña</label>
          <input
            type="text"
            placeholder="Ingrese su contraseña"
            className="p-2 border-b-2 text-black focus:border-blue-500 outline-none"
          />
        </div>
        <button
          className="mt-5 p-1 text-white bg-blue-500 rounded-md hover:bg-blue-700 w-full"
          type="submit"
        >
          Ingresar
        </button>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
        <p className="text-center">¿No tenes cuenta? Create una</p>
        <button className="bg-slate-700 hover:bg-slate-900 rounded-md text-white m-1 p-2">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default Login;
