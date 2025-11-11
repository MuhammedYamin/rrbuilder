"use client"; // Required for Next.js App Router

import { useEffect, useState } from "react";

const SharePost = () => {
  const [shareUrl, setShareUrl] = useState("");
  const [shareTitle, setShareTitle] = useState("");

  useEffect(() => {
    // Ensure this runs only on the client side
    setShareUrl(window.location.href);
    setShareTitle(document.title);
  }, []);

  return (
    <div className="flex space-x-3">
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          className="fill-current"
        >
          <path d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z" />
        </svg>
      </a>

      {/* Twitter (X) Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          className="fill-current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
          />
        </svg>
      </a>

      {/* LinkedIn Share */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="fill-current"
        >
          <path d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z" />
        </svg>
      </a>

      {/* WhatsApp Share */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gray-light text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          className="fill-current"
        >
          <path d="M16.2 5.8c-1.7-1.7-4-2.6-6.5-2.6C5.5 3.2 2.2 6.5 2.2 10.7c0 1.9.6 3.6 1.6 5L2 19.8l4.3-1.3c1.4.8 3 1.2 4.6 1.2 4.3 0 7.8-3.4 7.8-7.7 0-2.5-.9-4.8-2.5-6.4zM11 17.3c-1.3 0-2.5-.3-3.6-1L5 16.8l.8-2.3c-.9-1.2-1.3-2.5-1.3-3.9 0-3.5 2.9-6.3 6.4-6.3 1.7 0 3.3.6 4.5 1.9 1.3 1.2 1.9 2.8 1.9 4.5 0 3.4-2.8 6.3-6.3 6.3z" />
        </svg>
      </a>
    </div>
  );
};

export default SharePost;
