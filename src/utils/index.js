

const getStaticPath = async ({context}) => {
    const id = context.params.id;
    const res = await fetch('https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_caa7f63e15977152afb7ad68cf70e3ac');
    const data = await res.json();

    return{
        props:{organization: data}
    }
}

const charityOrg = ({organization})=>{
        
}