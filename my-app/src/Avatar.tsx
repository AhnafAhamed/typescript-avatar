import { useState } from "react";

export const FALLBACK_AVATAR_ALT_TEXT = 'Fallback avatar';
export const FALLBACK_AVATAR_URL = 'https://cataas.com/cat/says/Hello%20World';

type AvatarProps = {
  url?: string;
  alt?: string;
};

function Avatar({ url = FALLBACK_AVATAR_URL, alt = FALLBACK_AVATAR_ALT_TEXT}: AvatarProps) {
  const [imageUrl, setImageUrl] = useState(url);
  return (
    <img src={imageUrl} alt={alt} onError={() => {setImageUrl(FALLBACK_AVATAR_URL)} } />
  );
}

export default Avatar;
