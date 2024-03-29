import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
   <div className="container section project-details">
       <div className="card z-depth-0">
           <div className="card-content">
               <span className="card-title">
                   Project Title - {id}
               </span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut fugit eum architecto debitis dicta repellat velit culpa nostrum corrupti quod laudantium, laborum dolore. Voluptatem cum dolor quasi nesciunt perspiciatis.</p>
           </div>
           <div className="card-action gery lighten-4 grey-text">
               <div>Posted by the net ninja</div>
               <div>2nd September , 2am</div>
           </div>
       </div>
   </div>
  )
}
