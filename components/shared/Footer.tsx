import Card from "./Card"
export default function Footer() {
  return (
    <div className="bg-[#9fccbcc9] lg:h-[400px]  relative ">
        <div className="flex gap-10 justify-center   bottom-[20%] left-1/2 lg:translate-x-[-50%] flex-col lg:absolute">
            <div>
                <p className="text-center text-4xl font-bold">קצת על הטיפולים</p>
            </div>
            <div className="flex gap-6 max-lg:flex-wrap max-lg:justify-center ">  
                <Card> 
                    <div className="mt-5"> <p className="text-2xl">דיקור סיני</p></div>
                    <div className="mt-10 text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus unde placeat autem odio sit. Excepturi nam molestiae accusamus culpa, assumenda harum similique dolores esse nesciunt at mollitia blanditiis dicta.</div>

                  
                </Card>
                <Card>
                    <div className="mt-5"><p className="text-2xl">טיפול בצמחי מרפה</p></div>
                    <div className="mt-10 text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus unde placeat autem odio sit. Excepturi nam molestiae accusamus culpa, assumenda harum similique dolores esse nesciunt at mollitia blanditiis dicta.</div>

                </Card>
                <Card>
                    <div className="mt-5"> 
                        <p className="text-2xl">טויינא</p>
                    </div>
                    <div className="mt-10 text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus unde placeat autem odio sit. Excepturi nam molestiae accusamus culpa, assumenda harum similique dolores esse nesciunt at mollitia blanditiis dicta.</div>
                
                </Card>
            </div>
          
        </div>
    </div>
  )
}
