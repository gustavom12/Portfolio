import React, { useRef, useState } from "react";
import "./animatedInput.sass";
function AnimatedInput({
  options,
}: {
  options: {
    name: string;
    textarea?: boolean;
    setValue: any;
    inSpanish: boolean;
    pattern?: any
  };
}) {
  const { name, textarea, setValue, inSpanish, pattern } = options;
  const labelRef: any = useRef();
  const [error, setError] = useState<any>(null);
  const onChange = (e: any) => {
    labelRef.current.classList.add("active");
    setValue(e.target.value);
    if(error)verificate(e);
  };
  const verificate = (e: any) => {
    const length = e.target.value.length;
    if (length === 0) labelRef.current.classList.remove("active");
    setError("");
    labelRef.current.classList.remove("errorColor");
    if (length < 5) {
      labelRef.current.classList.add("errorColor");
      inSpanish
        ? setError(`${name} debe tener al menos 5 carácteres`)
        : setError(`${name} must has at least 5 characters`);
      return;
    }
    if(pattern){
      if(!pattern.test(String(e.target.value).toLowerCase())){
        labelRef.current.classList.add("errorColor");
        inSpanish
          ? setError(`Ingresa un ${name} válido`)
          : setError(`Invalid ${name}`);
        return;
      }
    }
  };
  return (
    <div className="animatedInput">
      <label
        htmlFor={name}
        ref={labelRef}
      >
        {name}
      </label>
      {textarea ? (
        <textarea
          id={name}
          className="huge"
          onChange={onChange}
          onFocus={() => {
            labelRef.current.classList.add("active");
          }}
          onBlur={verificate}
        ></textarea>
      ) : (
        <input
          id={name}
          onChange={onChange}
          type="text"
          className={error ? "errorInput" : ""}
          onFocus={() => {
            labelRef.current.classList.add("active");
          }}
          onBlur={verificate}
        />
      )}
      <p
        className="text-danger m-0 text-center flex"
        style={{ minHeight: "24px" }}
      >
        {error}
      </p>
    </div>
  );
}
export default AnimatedInput;
