import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { CommentPostType } from './makecomment.type';
import { useLocation } from 'react-router-dom';

export default function useMakeComment() {
  const colorRef = useRef<HTMLSelectElement | null>(null)
  const ratingRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)
  const { state } = useLocation();
  const goTo = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state?.scroll) {
      if (goTo.current instanceof HTMLDivElement) {
        goTo.current.scrollIntoView({ behavior: 'smooth' });
        // FIXME: scroll into view not working
      }
    }
    /* eslint-disable-next-line */
  }, [state]);



  function updateComment(setComment: Dispatch<SetStateAction<CommentPostType>>) {

      const newCommentObj: CommentPostType = {
        color: colorRef.current?.value ?? undefined,
        rating: Number(ratingRef.current?.getAttribute("data-selected")) || null,
        title: titleRef.current?.value ?? "",
        text: textRef.current?.value ?? "",
      }

      setComment(newCommentObj)
  }
  return {
    form: {
      colorRef,
      ratingRef,
      titleRef,
      textRef,
      fileRef
    },
    updateComment,
    goTo
}}
