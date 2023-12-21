const base_url = process.env.BASE_URL

export async function postRequest(url = "", data = {}) {
  try {
    const response = await fetch(`${base_url}/api/${url}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage?.getItem("token") || ""
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error(response?.status.toString())
    return response.json()
  } catch (err: any) {
    return { err: 1, status: err.message }
  }
}

export async function getRequest(url = "", data = {}) {
  try {
    const response = await fetch(`${base_url}/api/${url}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage?.getItem("token") || ""
      }
    })

    if (!response.ok) throw new Error(response?.status.toString())
    return response.json()
  } catch (err: any) {
    return { err: 1, status: err.message }
  }
}


export async function postImage(url = "", data: any) {
  try {
    const response = await fetch(`${base_url}/api/${url}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: { "token": localStorage?.getItem("token") || "" },
      body: data,
    })

    if (!response.ok) throw new Error(response?.status.toString())
    return response.json()
  } catch (err: any) {
    return { err: 1, status: err.message }
  }
}

export async function deleteRequest(url = "", data = {}) {
  try {
    const response = await fetch(`${base_url}/api/${url}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage?.getItem("token") || ""
      }
    })

    if (!response.ok) throw new Error(response?.status.toString())
    return response.json()
  } catch (err: any) {
    return { err: 1, status: err.message }
  }
}
