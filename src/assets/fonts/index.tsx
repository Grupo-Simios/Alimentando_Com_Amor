import { Zilla_Slab, Outfit } from 'next/font/google';

export const ZillaFont = Zilla_Slab({
    weight: ["300", "400", "500", "600", "700",],
    subsets: ['latin']
})

export const outfitFont = Outfit({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin']
})