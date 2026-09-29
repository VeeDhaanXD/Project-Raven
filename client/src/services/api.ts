const API='/api';
export async function api<T>(path:string,opts:RequestInit={}){const token=localStorage.getItem('raven_token');const res=await fetch(`${API}${path}`,{...opts,headers:{'Content-Type':'application/json',...(token?{Authorization:`Bearer ${token}`}:{})}});const data=await res.json();if(!res.ok)throw new Error(data.error||data.message||'Request failed');return data as T;}
