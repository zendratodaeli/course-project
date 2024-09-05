"use client"
import { supabaseClient } from "@/lib/utils"
import { onOnline } from "@/redux/slices/online-member-slice"
import { AppDispatch } from "@/redux/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"
import { JSONContent } from "novel"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { v4 } from "uuid"
import { z } from "zod"

export const useGroupChatOnline = (userid: string) => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const channel = supabaseClient.channel("tracking")

    channel
      .on("presence", { event: "sync" }, () => {
        const state: any = channel.presenceState()
        console.log(state)
        for (const user in state) {
          dispatch(
            onOnline({
              members: [{ id: state[user][0].member.userid }],
            }),
          )
        }
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({
            member: {
              userid,
            },
          })
        }
      })

    return () => {
      channel.unsubscribe()
    }
  }, [])
}


