const APIKey = "5a3f3373b8ebcad2db18450af15ec4fd";
    // var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=5a3f3373b8ebcad2db18450af15ec4fd&language=en-US&query=marvel&page=1&include_adult=false";
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response);
    //     var moviesarray=response.results.map(arrfunc);
    //     function arrfunc(mov){
    //         var movobj={
    //             title:mov.title,
    //             date:mov.release_date,
    //             summary:mov.overview,
    //             id:mov.id,
    //             poster:"https://image.tmdb.org/t/p/w200"+mov.poster_path
    //         }
    //             return(movobj);
    //     }
    //     console.log(moviesarray);
    // });
    const idCall=function(id){
        var queryURL="https://api.themoviedb.org/3/movie/"+id+"?api_key=5a3f3373b8ebcad2db18450af15ec4fd&language=en-US&append_to_response=credits"
        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response){
            console.log(response);
            var dirObj=response.credits.crew.filter(x=> x.department=="Directing");
            var cast="";
            for(i=0;i<3&&i<response.credits.cast.length;i++){
                if (cast.length>1){
                    cast+=(", ")
                }
                cast+=(response.credits.cast[i].name);
            }
            console.log(cast)
            
            var movObj={
                title:response.title,
                year:response.release_date.substring(0,4),
                director:dirObj[0].name,
                cast:cast,
                posterUrl:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+response.poster_path,
                id:id
            }
            console.log(movObj);
        });
    }
    module.exports={
        idCall:idCall
    };