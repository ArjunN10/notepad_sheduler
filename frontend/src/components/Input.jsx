export default function Input({ h ,w,outline}) {
    return (
      <>
        <input type="text" className={`border-none px-3 h-${h} outline-${outline} `} />
      </>
    );
  }
  