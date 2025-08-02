import Image from "next/image";

export const HeaderLg = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Image
        src="/wallpaper-header-pc.jpg"
        alt="Header Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Monetiza tu Comunidad VIP
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Pronto podrás crear tu propio sistema SaaS para ofrecer contenido
          exclusivo y gestionar membresías de tu comunidad VIP. ¡Sé parte de la
          nueva era para creadores!
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition"
        >
          Contacta preventa
        </a>
      </div>
    </div>
  );
};

export const HeaderMd = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <Image
        src="/wallpaper-phone.jpg"
        alt="Header Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
          Monetiza tu Comunidad VIP
        </h1>
        <p className="text-base text-gray-200 mb-6 max-w-md">
          Muy pronto podrás gestionar membresías, pagos y contenido exclusivo
          para tus seguidores desde una sola plataforma. ¡Anticípate y únete a la
          preventa!
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-base shadow-lg hover:scale-105 transition"
        >
          Contacta preventa
        </a>
      </div>
    </div>
  );
};
