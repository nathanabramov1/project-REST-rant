const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div className='rating-image'>
                <img className='img-tea' src="https://images.everydayhealth.com/images/teas-that-can-help-or-harm-your-heart-black-tea-1440x810.jpg" alt="tea-pic" />
                <h2 className='rating-title'>Rating</h2>
                <p>Not Rated</p>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>                          
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 


 

          </main>
        </Def>
    )
}

module.exports = show

