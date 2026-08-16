export const imagePrompts = [
  {
    id: "ip-001",
    title: "Soft-Glam Trending Girl Portrait",
    slug: "soft-glam-trending-girl-portrait",
    category: "trending-portraits",
    summary:
      "Restyle an uploaded selfie into a polished soft-glam portrait with dewy skin, warm butterfly glow, and a pastel background — the most copied Gemini photo format right now.",
    prompt:
      "Edit the uploaded photo. This is an identity-preserving restyle, not a face replacement.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep the subject's facial identity exactly as in the source photo. Do not alter face shape, bone structure, eyes, eyebrows, nose, lips, teeth, skin tone, skin texture, beauty marks, scars, facial hair, hairline, or natural expression. The person must remain instantly recognizable as the same individual. Do not smooth, slim, de-age, age, beautify, or otherwise alter the face. Do not generate a new person.\n\nSTYLE CHANGE ONLY: Restyle the scene and finish into a soft-glam aesthetic selfie. Apply a dewy, luminous skin finish while preserving natural skin texture; avoid heavy smoothing or plastic skin. Add warm, soft highlight and a subtle butterfly lighting effect. Use a dreamy pastel background, high-key diffuse lighting, glossy lips, soft rosy makeup, and polished hair styling if appropriate. Keep the original face and identity unchanged.\n\nTECHNICAL: High-resolution, hyper-realistic, fashion-editorial portrait, 8k detail, sharp focus on eyes, natural depth of field, soft rim light, vertical social frame if suitable.",
    requiresUpload: true,
    aspectRatio: null,
    image: "/images/gemini/girl-portrait.webp",
    cardImage: "/images/gemini/girl-portrait.webp",
    detailImage: "/images/gemini/girl-portrait.webp",
  },
  {
    id: "ip-002",
    title: "Cinematic Urban Street Boy Portrait",
    slug: "cinematic-urban-street-boy-portrait",
    category: "aesthetic-and-cinematic",
    summary:
      "Restyle an uploaded photo into a moody cinematic urban street portrait with teal-and-orange color grade, blurred city background, and confident streetwear in a vertical 4:5 frame.",
    prompt:
      "Edit the uploaded photo. Preserve the person's identity completely; this is a scene and style restyle, not a face edit.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep the subject's face, facial features, bone structure, eyes, eyebrows, nose, lips, jawline, skin tone, skin texture, scars, birthmarks, facial hair, hairline, and original expression exactly as they appear in the source photo. Do not alter, beautify, slim, de-age, age, smooth, or swap the face. The output must show the same person, instantly recognizable.\n\nSTYLE CHANGE ONLY: Restyle the surroundings and presentation into a cinematic urban street portrait. Apply moody overcast light, a teal-and-orange cinematic color grade, blurred city street background, confident casual streetwear, shallow depth of field, film-still mood, and a vertical 4:5 frame. Keep skin texture natural and true to life.\n\nTECHNICAL: Hyper-realistic, 8k cinematic photography, sharp focus on the eyes, natural film grain, believable environmental lighting, editorial street-style composition.",
    requiresUpload: true,
    aspectRatio: "4:5",
    image: "/images/gemini/cinematic-boy-portrait.webp",
    cardImage: "/images/gemini/cinematic-boy-portrait.webp",
    detailImage: "/images/gemini/cinematic-boy-portrait.webp",
  },
  {
    id: "ip-003",
    title: "Cinematic Evening Couple Portrait",
    slug: "cinematic-evening-couple-portrait",
    category: "trending-portraits",
    summary:
      "Edit an uploaded couple photo into a magazine-quality cinematic evening portrait with coordinated outfits, blurred city lights, and a warm film color grade — both faces preserved exactly.",
    prompt:
      "Edit the uploaded photo of two people. This is an identity-preserving couple restyle. Preserve both individuals exactly as they are.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep both faces, facial features, bone structures, eyes, eyebrows, noses, lips, jawlines, skin tones, skin textures, unique marks, scars, facial hair, hairlines, and expressions exactly as in the source photo. Do not merge, alter, beautify, slim, de-age, age, smooth, or swap either face. Do not change either person's identity. Both people must remain instantly recognizable as themselves.\n\nSTYLE CHANGE ONLY: Restyle the scene into a cinematic couple portrait. Coordinate neutral-tone outfits without changing physical appearance. Apply soft directional lighting, a blurred city-evening background, natural closeness, warm film color grade, shallow depth of field, and magazine-cover quality composition.\n\nTECHNICAL: Hyper-realistic, 8k cinematic photography, sharp focus on both faces, natural skin texture, believable ambient evening light, editorial couple-portrait framing.",
    requiresUpload: true,
    aspectRatio: null,
    image: "/images/gemini/cinematic-couple.webp",
    cardImage: "/images/gemini/cinematic-couple.webp",
    detailImage: "/images/gemini/cinematic-couple.webp",
  },
  {
    id: "ip-004",
    title: "3D Collectible Figure on Desk",
    slug: "3d-collectible-figure-on-desk",
    category: "3d-and-toy",
    summary:
      "Turn an uploaded photo into a realistic 3D collectible miniature figure standing on a wooden desk next to everyday objects — the format that pushed the whole AI portrait trend into the mainstream.",
    prompt:
      "Edit the uploaded photo. Turn the person into a realistic 3D collectible miniature figure while preserving the person's identity and recognizability.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Preserve the subject's facial identity and distinguishing features even in miniature form. Maintain the same face shape, eyes, eyebrows, nose, lips, jawline, skin tone, hairstyle, and outfit recognizability. Do not replace the person with a generic or altered face. The figure must clearly be the same person, not a different character.\n\nSTYLE CHANGE ONLY: Place the person as a realistic 3D collectible figure standing on a wooden desk next to a keyboard and coffee mug for scale. Add a subtle plastic-model texture, detailed base, soft desk lighting, shallow depth of field, believable miniature scale, and a vertical 4:5 social frame. Keep facial proportions and identity recognizable despite the toy-style transformation.\n\nTECHNICAL: Realistic miniature photography, 8k detail, soft studio desk light, natural shadows, sharp focus on the figure's face, collectible designer-toy aesthetic.",
    requiresUpload: true,
    aspectRatio: "4:5",
    image: "/images/gemini/3d-figure.webp",
    cardImage: "/images/gemini/3d-figure.webp",
    detailImage: "/images/gemini/3d-figure.webp",
  },
  {
    id: "ip-005",
    title: "Old Photo Restoration and Colorization",
    slug: "old-photo-restoration-colorization",
    category: "restoration-and-repair",
    summary:
      "Restore an old damaged photo and add realistic era-accurate color — removes scratches, repairs tears, sharpens detail, then colorizes with natural skin tones and believable fabric colors.",
    prompt:
      "Edit the uploaded old photo. This is a restoration and colorization task, not a face-editing task.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep every face and facial feature exactly as in the original. Do not reconstruct, regenerate, beautify, smooth, slim, de-age, age, or replace any face. When restoring, only repair damage: remove scratches, dust, creases, water damage, torn areas, and fading. Sharpen existing details without inventing new facial features. Preserve the original composition, facial proportions, expressions, skin texture, and era-accurate clothing.\n\nRESTORATION: Repair all visible damage while maintaining the original identity and archival character of the photograph. Natural, archival-quality restoration, no artificial or plastic appearance.\n\nCOLORIZATION: After restoration, add realistic natural color. Use era-accurate skin tones, believable fabric colors, and soft natural lighting. Keep it subtle and true to life, not oversaturated. Do not change any faces or features. Do not invent details that were not present in the original.\n\nTECHNICAL: High-resolution archival photo restoration, 8k detail, realistic period-authentic color palette, natural film texture, museum-quality finish.",
    requiresUpload: true,
    aspectRatio: null,
    image: "/images/gemini/photo-restoration.webp",
    cardImage: "/images/gemini/photo-restoration.webp",
    detailImage: "/images/gemini/photo-restoration.webp",
  },
  {
    id: "ip-006",
    title: "Y2K Flash Photo Portrait",
    slug: "y2k-flash-photo-portrait",
    category: "aesthetic-and-cinematic",
    summary:
      "Restyle an uploaded photo into the Y2K early-2000s flash look: harsh on-camera flash, slightly washed cool color, digital noise, and candid party-photo energy.",
    prompt:
      "Edit the uploaded photo. This is an identity-preserving stylistic restyle only.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep the subject's face, facial features, bone structure, eyes, eyebrows, nose, lips, jawline, skin tone, skin texture, scars, marks, facial hair, hairline, and expression exactly as in the source photo. Do not alter, beautify, slim, de-age, age, smooth, or swap the face. The person must remain instantly recognizable as the same individual.\n\nSTYLE CHANGE ONLY: Restyle the photo into a Y2K early-2000s digital-camera look. Apply harsh direct on-camera flash, slightly washed cool color, fine digital noise, candid party-photo framing, low-fi nostalgic mood, and authentic 2003 point-and-shoot aesthetic. Keep skin texture natural; do not use heavy smoothing.\n\nTECHNICAL: Realistic early-2000s compact-camera output, 4:3 or square social frame if suitable, authentic digital grain, soft overexposed highlights around the subject, believable direct flash falloff.",
    requiresUpload: true,
    aspectRatio: null,
    image: "/images/gemini/y2k-style.webp",
    cardImage: "/images/gemini/y2k-style.webp",
    detailImage: "/images/gemini/y2k-style.webp",
  },
  {
    id: "ip-007",
    title: "Aura-Farm Aesthetic Portrait",
    slug: "aura-farm-aesthetic-portrait",
    category: "aesthetic-and-cinematic",
    summary:
      "Edit an uploaded photo into a dramatic aura-farm portrait with glowing colored rim light, dark atmospheric background, soft volumetric haze, and a confident low-angle cinematic frame.",
    prompt:
      "Edit the uploaded photo. This is an identity-preserving cinematic restyle.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep the subject's face, facial features, bone structure, eyes, eyebrows, nose, lips, jawline, skin tone, skin texture, scars, marks, facial hair, hairline, and expression exactly as in the source photo. Do not alter, beautify, slim, de-age, age, smooth, or swap the face. The output must clearly show the same person.\n\nSTYLE CHANGE ONLY: Restyle the scene into an aura-farm aesthetic portrait. Add dramatic colored rim light glowing around the subject, a moody dark atmospheric background, soft volumetric haze, confident low-angle framing, rich cinematic color grade, subtle airborne particles, and a high-detail vertical portrait. Keep skin texture natural and true to life.\n\nTECHNICAL: Hyper-realistic, 8k cinematic photography, sharp focus on the subject, controlled rim lighting, strong contrast between subject and background, atmospheric depth, vertical social-media composition.",
    requiresUpload: true,
    aspectRatio: null,
    image: "/images/gemini/aura-farm.webp",
    cardImage: "/images/gemini/aura-farm.webp",
    detailImage: "/images/gemini/aura-farm.webp",
  },
  {
    id: "ip-008",
    title: "Red Cinematic Moody Man Portrait",
    slug: "red-cinematic-moody-man-portrait",
    category: "aesthetic-and-cinematic",
    summary:
      "Generate a hyper-realistic 8K cinematic close-up of a stylish man with a modern mullet and goatee, bathed in intense saturated red backlight with dramatic chiaroscuro shadows and a music-video editorial aesthetic.",
    prompt:
      "Edit the uploaded photo. Preserve the subject's face exactly as it appears in the source image. This is a cinematic scene and lighting restyle, not a face change.\n\nIDENTITY PRESERVATION (NON-NEGOTIABLE): Keep the subject's facial identity, bone structure, jawline, nose, lips, skin tone, skin texture, facial hair, hairline, and overall features unchanged. Do not alter, smooth, slim, de-age, age, beautify, or swap the face. Even though sunglasses are added, the underlying facial geometry and recognizable features must remain identical to the source photo. Do not generate a new person.\n\nSTYLE AND SCENE: Create a hyper-realistic 8k cinematic close-up profile portrait. The subject has dark messy hair styled in a modern mullet and a sparse goatee. Add thick-rimmed rectangular black sunglasses. Dress him in a dark textured black jacket. Add a dangling silver earring, a thick silver link chain necklace, and a longer thinner chain necklace with a cross pendant.\n\nLIGHTING AND COLOR: Use intense saturated monochromatic red lighting. Strong red backlight creates dramatic silhouette and rim lighting on his profile and curls. Background is a glowing solid deep crimson. Lighting produces high-contrast chiaroscuro shadows on the face, hiding some details in shadow while highlighting hair texture and jewelry. Keep the person's facial identity recognizable despite the dramatic lighting.\n\nTECHNICAL: Hyper-detailed, photorealistic, 8k resolution, cinematic studio photography, music-video aesthetic, edgy high-fashion editorial style, sharp focus on visible facial features, dramatic atmosphere, volumetric lighting, deep shadows, moody and intense.",
    requiresUpload: true,
    aspectRatio: null,
    image: "/images/gemini/red-man.webp",
    cardImage: "/images/gemini/red-man.webp",
    detailImage: "/images/gemini/red-man.webp",
  },
];