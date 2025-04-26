'use client'

import { useState } from "react"
import { Button } from "../ui/button"

function Comment({comment}:{comment:string}) {
  const [isExpanded,setExpanded] = useState(false)
  const toggleExpanded = ()=>setExpanded(!isExpanded)
  const longComment = comment.length>130
  const displayComment = longComment&&!isExpanded?`${comment.slice(0,130)}...`:comment
  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="text-muted-foreground pl-0 capitalize"
          onClick={toggleExpanded}
        >
          {isExpanded ? "show less" : "show more"}
        </Button>
      )}
    </div>
  );
}
export default Comment