import MainImg from "../../../assets/infoimages/mainimage.jpg";

function MainImage() {
  return (
    <div className="relative hidden lg:block w-full max-w-[520px]">
      <div className="absolute inset-8 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <img
        src={MainImg}
        alt="Imagen representativa de desarrollo web"
        className="relative w-full h-auto rounded-3xl object-cover drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
        loading="lazy"
        style={{
          maskImage: "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
        }}
      />
    </div>
  );
}

export default MainImage;
