import React, { useEffect, useRef, useState } from "react";

function MainSkillCircle({
  percent,
  children
}: {
  percent: number;
  children?:any
}) {
  const skillDiv: any = useRef();
  const progressValue: any = useRef();
  const progressValue2: any = useRef();
  // this animation is using 2 divs, first div can only cover first 50% of border
  const [percentAnimation, setPercentAnimation] = useState(0);
  useEffect(() => {
    const AnimationDuration = 2500,
      delay = 700;
    const intersectionCallback = (entry: any) => {
      if (entry === "none" || !entry[0].isIntersecting) return;
      const TimeIteration = AnimationDuration / percent;
      setTimeout(() => {
        const Interval = setInterval(() => {
          setPercentAnimation((i: number) => {
            if(i >= percent){
              clearInterval(Interval);
              return i
            }
            return i + 1
          });
        }, TimeIteration);
      }, delay - 50);
      new Promise((resolve,reject)=>{
        progressValue.current.animate([
          {transform: `rotate(0deg)`},
          {transform: `rotate(180deg)`},
        ],{
        // timing options
        easing: "linear",
        duration: AnimationDuration / 2,
        iterations: 1,
        fill: 'forwards',
        delay: delay
      })
      setTimeout(()=>{resolve("animación terminada")},(AnimationDuration / 2) + delay )
      }).then((res)=>{
        //si la animación es menor al 50%, no sigue con la otra mitad de la animacion
        if(percent <= 50)return;
        const percent2 = (((percent -50 ) / 100) * 180) *2
        progressValue2.current.classList.add("animationStayAt100")
        progressValue2.current.animate([
          {transform: `rotate(0deg)`},
          {transform: `rotate(${percent2}deg)`}
        ],{
          // timing options
          easing: "ease-out",
          duration: AnimationDuration / 2,
          iterations: 1,
          fill: 'forwards'
        })
      })
      observer.unobserve(skillDiv.current)
    }
    let observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.4,
    });
    observer.observe(skillDiv.current);
  }, [setPercentAnimation,percent]);
  return (
    <div
      ref={skillDiv}
      className="mainSkill inline-flex flex-column"
    >
      <div className="text-center mx-auto">
        {children}
      </div>
      <div className="row d-inline-block">
        <div className="col-md-3 col-sm-6 mx-auto d-inline-block">
          <div className="progress blue d-inline-block">
            <span className="progress-left ">
              <span className="progress-bar" ref={progressValue2}></span>
            </span>
            <span className="progress-right ">
              <span className="progress-bar" ref={progressValue}></span>
            </span>
            <div className="progress-value">{percentAnimation}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSkillCircle;
