import type { blog } from "../utils/blog"

const id = "random_id_here";
const title = "Cara Makan Nasi padang";
const author = "ary";
const blogContent: blog = {
    id,
    title,
    author,
    paragraphs: [
        `Agar efektif, usahakan untuk membuat judul artikel
        sesingkat-singkatnya. Menurut Tempo Institute, jumlah kata di
        judul dianjurkan tidak melebihi 14 kata. Salah satu hal yang
        bisa mengurangi jumlah kata di judul adalah menghindari kata
        sambung (cth: “yang”, “dari”) yang tidak diperlukan.`,
        `Software development: Create and sell software applications or mobile apps. The initial effort is in development, but once launched, it can be used by many users without needing extra time from you.`
    ],
    metadata: {
        title,
        shortDescription: `Agar efektif, usahakan untuk membuat judul artikel
        sesingkat-singkatnya. Menurut Tempo Institute, jumlah kata di
        judul dianjurkan tidak melebihi 14 kata. Salah satu hal yang
        bisa mengurangi jumlah kata di judul adalah menghindari kata
        sambung (cth: “yang”, “dari”) yang tidak diperlukan.`,
        author,
        id
    },
    publishedAt: '2023-04-05'
};

export default blogContent;