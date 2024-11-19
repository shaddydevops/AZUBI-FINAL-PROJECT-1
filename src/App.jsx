 import offimg from '/imgs/off-icon.png'
import './App.css'
import { useState,useEffect,useRef } from 'react'
    // import videos from '../../../../../Downloads/Telegram Desktop/John_Wick_Chapter_2_2017_(2017)_BluRay_high_(fzmovies.net).mp4';

function App() {
  const [loader, setloader] = useState(true)
  const [searching, setsearching] = useState(false)
  const [NetworkError, setNetworkError] = useState("Search  for a movie🔎 🎬🍿🎞️")
  const [filter, setfilter] = useState("")
  const [payload, setpayload] = useState([{title:"",image:"",body:""}])
  const bar = useRef(null)

  useEffect(() => {
    document.body.onload=()=>{
      setloader(false);
    }
  }, [])
  
  useEffect(() => {
   
    fetch('https://benasdom.github.io/moviesapi/db.json').then(res=>res.json()).then((res)=>{
        setpayload(res.blogs)
    }).catch((err)=>{return setTimeout(()=>{setNetworkError(`Oops! please check your internet connection 🔌💻🥺${err}`)},1000);})
  }, [filter])
  return (
    <>
   {loader?<LoadComponent opacity={1} zdex={100}/>:<LoadComponent opacity={0} zdex={-100}/>}
<div className="bodycontainer">
    <div className="leftbody">
      <div className="leftbodyfix">
        <div className="logoleft">
            <div className="logoimg">
                <div className="rimg">
                    <img loading="lazy" id="logoimg" src="imgs/uemovies.png"/></div></div>
            <div className="logoname">uemovies</div>
   
        </div>
        <div className="menuoptions">
            <div className="menuicons"><i className="fa fa-home pad"></i>Home</div>
            <div className="menuicons"><i className="fa fa-list pad"></i>Category</div>
            <div className="menuicons"><i className="fa fa-play pad"></i>Watch online</div>
            <div className="menuicons"><i className="fa fa-download pad"></i>Download</div>
            <div className="menuicons"><i className="fa fa-camera pad"></i>Media</div>
        </div> 
          <div className="menuoptions">
            <div className="menuicons"><i className="fa fa-user pad"></i>Profile</div>
            <div className="menuicons"><i className="fa fa-users pad"></i>Friends</div>
            <div className="menuicons"><i className="fa fa-gear pad"></i>Settings</div>
            <div className="menuicons"><i className="fa fa-question pad"></i>Help</div>
        </div>
        <div className="powered">powered by unityelites</div>
      </div>
    </div>
    <div className="centerbody">
        <div className="centerhead">
            <div className="headerlist">
                <div className="list"><i className="fa fa-film pad"></i>Movies</div>
                <div className="list"><i className="fa fa-video pad"></i>Series</div>
                <div className="list"><i className="fa fa-television pad"></i>Shows</div>
            {<Search setsearching={setsearching} setfilter={setfilter} filter={filter} bar={bar} NetworkError={NetworkError} payload={payload} event={"none"} />}
            </div>
        </div>
        <div className="centershow"><img loading="lazy" src="" alt="" className="cshow"/><div className="mask">
             <iframe className="mask
    " src="https://www.youtube.com/embed/7kSTqNurquY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     
     {/* <video   className="mask"  controls="" preload="auto" download>
        <source src={videos} type="video/mp4" />
         Your browser does not support the video tag.
        </video>  */}
      {/* <iframe width="100%" height="100%" style="z-index:20" src="https://www.youtube.com/embed/TVL4S05O-C8" 
            title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>  */}
                </div></div>
        <div className="centerbottom">
            <div className="bottoma">
                <div className="best"><i className="fa fa-film pad"></i>Best Movies</div>
                <div className="bestmoviesrow">
                    <div className="bestmovies">
                        {
                        new Array(18).fill("").map((a,b)=>{
                
                    return a=<div className='aligned'><div className="movies" key={"key"+b} data-ptext="" data-texts="details..." ><img loading="lazy" src="" alt="" className="imgthumbb"/></div><div className='filmtitle'></div></div>

                        
                        })
                        }
                   
                </div>
            </div>
            </div>
            <div className="bottomb">
                <div className="best"><i className="fa fa-video pad"></i>Best Series</div>
                <div className="bestseriesrow">
                <div className="bestseries">
                    {
                    new Array(18).fill("").map((a,b)=>{
                
                        return a=<div className='aligned'><div key={"key"+b} className="series" data-ptext="" data-texts="details..."><img loading="lazy" src="" alt="" className="imgthumb"/></div><div className='filmtitle'></div></div>              
                    })}

                </div>
            </div>
        </div>
        </div>
    </div>
 <div className="rightbody">
    <div className="rightbodyfix">
        <div className="topic"><span><i className="fa fa-star sta"></i> Popular</span></div>
       <div className="grouped">
      
                <div className="itempic">
                    <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                    
                        <div className="popdetails">
                        <div className="firstpop">fetching...</div>
                        <div className="secpop">fetching...</div>
                    </div>
                    
                    </div>
                
            
                    </div>    <div className="itempic">
                    <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                    
                        <div className="popdetails">
                        <div className="firstpop">fetching...</div>
                        <div className="secpop">fetching...</div>
                    </div>
                    
                    </div>
                
                
                        </div>
                        <div className="itempic">
                        <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                        
                            <div className="popdetails">
                            <div className="firstpop">fetching...</div>
                            <div className="secpop">fetching...</div>
                        </div>
                        
                        </div>
                    
                    
                            </div>  
                               <div className="itempic">
                            <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                            
                                <div className="popdetails">
                                <div className="firstpop">fetching...</div>
                                <div className="secpop">fetching...</div>
                            </div>
                            
                            </div>
                        
                        
                                </div>
       </div>
    <div className="bottombtn">
        see more
    </div>
    <div className="grouped">
      
                <div className="itempic">
                    <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                    
                        <div className="popdetails">
                        <div className="firstpop">fetching...</div>
                        <div className="secpop">fetching...</div>
                    </div>
                    
                    </div>
                
            
                    </div>    <div className="itempic">
                    <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                    
                        <div className="popdetails">
                        <div className="firstpop">fetching...</div>
                        <div className="secpop">fetching...</div>
                    </div>
                    
                    </div>
                
                
                        </div>
                        <div className="itempic">
                        <div className="poslist"><img loading="lazy" src={offimg} className="popimg"/>
                        
                            <div className="popdetails">
                            <div className="firstpop">fetching...</div>
                            <div className="secpop">fetching...</div>
                        </div>
                        
                        </div>
                    
                    
                            </div>
       </div>
    <div className="bottombtn">
        see more
    </div>
      
    </div>
 </div>
 {searching?<SearchList bar={bar} setfilter={setfilter} filter={filter} setsearching={setsearching} payload={payload} NetworkError={NetworkError} setNetworkError={setNetworkError}/>:""}
</div>
    </>
  )
}

const LoadComponent=({opacity,zdex})=>{
    return(
        <div className="loader" style={{opacity:opacity,zIndex:zdex}}>
         <div className="holdload"><img loading="lazy" src={offimg} className="loading"/>
            <div className="loadtext">awaiting...</div>
        </div>
    </div>
    )
}
const SearchList=({setsearching,NetworkError,setNetworkError,payload,bar,filter,setfilter})=>{
    
    return(
        <div className="searchlist">
            <div className="searchnav"> 
            <div className="closesearch" onClick={()=>{setsearching(false);bar.current.value=""}}>x</div>
            {<Search bar={bar} setfilter={setfilter} filter={filter} setsearching={setsearching} NetworkError={NetworkError} payload={payload} event={"all"} />}
</div>
            <div className="listcontent">
            { 
                   filter !="" && payload.length>1?payload.filter((a,b,c)=>c.indexOf(a)==b)                    
                  .filter((a,b,c)=>(a.title +" "+a.body).toLowerCase().includes(filter.toLowerCase()))
                  .map((a,b)=>{ 
                return a=<div className="filtered" key={"key"+b} data-ptext="title..." data-texts="details..."><img loading="lazy" src={a.image} alt="" className="imgthumb foundimg"/><div className="flexfound">
                    <div className="foundtitle">{a.title}</div><div className="describe">{a.body}</div></div></div>
                })
                :<div className="filtered" data-ptext="title..." data-texts="details..."><div className="describe">{NetworkError}</div></div>
            
 
            
            }
            </div>
            

        </div>
    )
}
const Search=({setsearching,NetworkError,payload,event,bar,setfilter,filter})=>{
    return(
        <div  className="lista" onClick={()=>{setsearching(true)}}>
        <div className="searchbox" style={{pointerEvents:event}} title="search">
            <div className="sicon">
           <i className="fa fa-search"></i> 
            </div>
            <div className="sinput">
           <input className="inputs" ref={bar} onChange={(e)=>{ setfilter(e.target.value.trim(""));setNetworkError("Loading...")}} placeholder="Search..." type="text" />
            </div>
        </div>
    </div>
    )
}

export default App
