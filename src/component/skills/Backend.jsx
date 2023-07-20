import React from "react";

const Backend = () => {
    return(
        <div className="skills_content">
        <h3 className="skills_title">Backend</h3>

        <div className="skills_box">
            <div className="skills_group">
                
             {/*div container for first skill line */}
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>  {/*circle tick check icon */}

                    <div>
                        <h3 className="skills_name">Node.js</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

              
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Express.js</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                
                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">MongoDB</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
        
         {/*div for SEcond vertical line skill */}
            <div className="skills_group">
            <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Postman</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Cloudinary</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">APIs</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
               </div>

            
        </div>
    </div>
    )
}

export default Backend;