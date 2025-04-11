function Footer(){
    const Dates= new Date()
    const  Years=Dates.getFullYear()
    return (
      <>
        <footer className="mt-20 p-6 flex flex-col justify-center items-center opacity-60">
          Developed by Rainer Morales <br /> © {Years}. All rights
          reserved
        </footer>
      </>
    );
}

export default Footer