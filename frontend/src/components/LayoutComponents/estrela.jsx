import React from 'react'
//import ReactDOM from 'react-dom'

const Estrela = () => {
    return(
    <div id="rate1">
        <span class="myratings1">4.5</span>
                    
        <fieldset class="rating"> 			
            <input type="radio" id="star_10" name="rating_1" value="5" />	
            <label class="full" for="star_10" title="Awesome - 5 stars"></label> 
            <input type="radio" id="star_9" name="rating_1" value="4.5" />			
            <label class="half" for="star_9" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star_8" name="rating_1" value="4" />		
            <label class="full" for="star_8" title="Pretty good - 4 stars"></label> 
            <input type="radio" id="star_7" name="rating_1" value="3.5" />		
            <label class="half" for="star_7" title="Good - 3.5 stars"></label> 	
            <input type="radio" id="star_6" name="rating_1" value="3" />			
            <label class="full" for="star_6" title="Meh - 3 stars"></label> 
            <input type="radio" id="star_5" name="rating_1" value="2.5" />	
            <label class="half" for="star_5" title="Meh - 2.5 stars"></label> 
            <input type="radio" id="star_4" name="rating_1" value="2" />		
            <label class="full" for="star_4" title="Kinda bad - 2 stars"></label> 
            <input type="radio" id="star_3" name="rating_1" value="1.5" />			
            <label class="half" for="star_3" title="Bad - 1.5 stars"></label> 
            <input type="radio" id="star_2" name="rating_1" value="1" />	
            <label class="full" for="star_2" title="Sucks big time - 1 star"></label>
            <input type="radio" id="star_1" name="rating_1" value="0.5" />		
            <label class="half" for="star_1" title="Sucks big time - 0.5 stars"></label> 
            <input type="radio" id="star_0" name="rating_1" value="0" />
            <label class="zero" for="star_0" title="Sucks big time - 0 stars"><span class="material-icons md-36">
            exposure_zero
            </span></label> 
        </fieldset>

        <form id="rating" method="POST">						
        <button type="submit" form="rating" id="starsub" name="starsub" class="animated-button"><span></span>
        <span></span>
        <span></span>
        <span></span>Submit</button>
        </form>
        <form action="" method="GET" id="worldform">		
            <button id="pworld" class="animated-button"><span></span>
            <span></span>
            <span></span>
            <span></span>World Score</button>
        </form>		
    </div>
    )
}

export default Estrela;