function ToDO(){

    function clickAlert(){
      alert("yes we noticed you click ")
    }
    return(
        <div>
            <h1>About Images</h1>
            <img src="https://imgs.search.brave.com/DlAHVpi9ecqqFOCdb-y2FOq5b6PdQQwI3eE4LCQrbvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzYwLzcxLzg2/LzM2MF9GXzc2MDcx/ODY2NV9meUE1MTZl/V2U3dThrdGtXcndj/UUNLNHFHTWtzbmRO/Vy5qcGc"
             alt="S name image" class="image" />

            <h3>It was  a awesome pic to see</h3>
            <h3>Roaming around the world to see</h3>
              <button onClick={clickAlert}>Click here to see</button>

        </div>

    )
}

export default ToDO;