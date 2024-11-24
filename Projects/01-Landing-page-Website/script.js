const text = document.querySelector('.text p');

text.innerHTML = text.innerHTML
                .split("").map((char, i) => `<span style = "transform:rotate(${i*10}deg)">${char}</span>`)
                .join("");


                let num1 = document.querySelector('.num1');
                let num2 = document.querySelector('.num2');
                let num3 = document.querySelector('.num3');
                
                const CounterUpAnimation = (number , start,end ,duration)=>{
                   let startTimestamp = null;
                   const step = (tiemstamp)=>{
                    if(!startTimestamp){
                        startTimestamp = tiemstamp;
                    }
                
                    let prograss = Math.min((tiemstamp - startTimestamp) / duration , 1);
                    number.innerHTML = Math.floor(prograss * (end - start) + start) + 'k+';
                
                    if(prograss <1){
                        window.requestAnimationFrame(step);
                    }
                   } 
                   window.requestAnimationFrame(step);
                }

                setTimeout(()=>{
                    CounterUpAnimation(num1 , 0 , 100 , 5000)
                    CounterUpAnimation(num2 , 0 , 32 , 2000)
                    CounterUpAnimation(num3 , 0 , 50 , 3000)
                } , 1000)