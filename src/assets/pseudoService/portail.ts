
export interface IPage{
  nom: string
  url: string
  is_jeux: boolean
}



export const lesPages: IPage[] = [{
  nom: 'Accueille',
  url: '/jeux/accueille',
  is_jeux: false
},{
  nom: 'Catalogue',
  url: '/jeux/catalogue',
  is_jeux: false
},{
  nom: 'sauveQuiPeut',
  url: '/jeux/sauveQuiPeut',
  is_jeux: true
}]
