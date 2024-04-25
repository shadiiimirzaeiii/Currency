import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

export const useReactQuerySubscription = () => {
  useEffect(() => {
    const queryClient = useQueryClient()
    const websocket = new WebSocket('wss://stream.binance.com:9443/stream/')

    websocket.onopen = () => {
      console.log('connected')
      const subscribeRequest = {
        method: "SUBSCRIBE",
        params: ["!ticker@arr"],
      };

      // Subscribe to the stream when the connection is opened
      websocket.send(JSON.stringify(subscribeRequest));
    }
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const queryKey = [...data.entity, data.id].filter(Boolean)
      queryClient.invalidateQueries({ queryKey })
    }

    return () => {
      websocket.close()
    }
  }, [])
}