export async function tryLoadJSON(url, fallbackData=null){
  try{
    const res = await fetch(url, {cache: 'force-cache'});
    if(!res.ok) throw new Error('HTTP '+res.status);
    return await res.json();
  }catch(e){
    return fallbackData;
  }
}

