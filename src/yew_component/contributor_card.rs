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
<div
    class="contributor-card inline-block group/card p-4 rounded-lg relative shadow-md overflow-hidden transition-all duration-1000 min-w-[210px] min-h-[88px]">
    /* background */
    <div
        class="bg-gradient-to-br group-hover/card:-rotate-6 via-sky-400 dark:via-sky-500 dark:from-indigo-300 from-indigo-600 dark:to-cyan-500 to-cyan-400 rounded-lg absolute top-0 bottom-0 right-0 left-0 blur-lg group-hover/card:blur-md duration-1000 transition-all">
    </div>
    /* image */
    <div class="flex items-center justify-center gap-2 mx-auto fine relative">
        <div
            class=" group/link fine:absolute fine:-mt-[28px] fine:-ml-[28px] group-hover/card:mt-0 group-hover/card:ml-0 fine:left-1/2 fine:top-1/2 group-hover/card:left-0 group-hover/card:top-0 delay-200 transition-all duration-1000">
            <a href={format!("{}",pr.github_link.clone())}
                class="text-md flex items-center p-1 relative mx-auto transition-all duration-1000">
                <div
                    class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tr dark:from-blue-300 from-blue-600 dark:to-cyan-500 to-cyan-400 rounded-full group-hover/link:rotate-180 transition-all duration-1000">
                </div>
                <img src={format!("{}",pr.img.clone())} alt={format!("{}",pr.name.clone())}
                    class="h-12 find:rotate-6 group-hover/card:-rotate-6 blur-none my-auto rounded-full transition-all duration-1000">
            </a>
        </div>
        <div
            class="blur-none fine:ml-16 flex flex-col whitespace-nowrap text-nowrap items-center gap-1 delay-100 transition-all duration-1000">
            <a href={format!("{}",pr.github_link.clone())} class=" dark:text-slate-100 text-slate-800 dark:fine:text-gray-200 fine:text-gray-700 dark:hover:text-slate-100 hover:text-slate-800 hover:font-medium truncate text-lg fine:opacity-0 group-hover/card:opacity-100
                fine:translate-y-40 group-hover/card:translate-y-0 delay-200 transition-all duration-1000">
                {pr.name.clone()}
            </a>
            <p
                class="text-sm text-gray-600 dark:text-gray-300 truncate fine:opacity-0 group-hover/card:opacity-100 fine:translate-y-40 group-hover/card:translate-y-0 delay-300 transition-all duration-1000">
                {pr.job.clone()}
            </p>
        </div>
    </div>


</div>
            </>
        }
    }
    