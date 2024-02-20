use yew::prelude::*;

    #[derive(Properties,Clone,Debug,PartialEq)]
    pub struct ContributorCardProps{
        github_link:AttrValue,img:AttrValue,name:AttrValue,job:AttrValue,
    }
    

    #[function_component(ContributorCard)]
    fn contributor_card(pr:&ContributorCardProps)->Html{

        html!{
            <>
            /* container */
<div class="contributor-card">
    /* background */
    <div class=" layer">
    </div>
    /* image */
    <a href={format!("{}",pr.github_link.clone())} class="container">
        <div class="photo">
            <div class="image-container">
                <div class="background-image"> </div>
                <img src={format!("{}",pr.img.clone())} alt={format!("{}",pr.name.clone())}/>
            </div>
        </div>
        <div class="text">
            <p class="name ">
                {pr.name.clone()}
            </p>
            <p class="desc">
                {pr.job.clone()}
            </p>
        </div>
    </a>


</div>
            </>
        }
    }
    