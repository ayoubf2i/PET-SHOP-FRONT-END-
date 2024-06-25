export interface lastePetBean {
  idPet: number;
  nomPet: string;
  descriptionPet: string;
  prixPet: number;
  special: boolean;
  imagePet: string;
  promotion: boolean;
  categorie: {
    idCategorie: number;
    nomCategorie: string;
  };
}
