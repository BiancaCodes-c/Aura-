const set=new Set<string>();
export const blocklist={ async add(s:string){set.add(s)}, async has(s:string){return set.has(s)} };
