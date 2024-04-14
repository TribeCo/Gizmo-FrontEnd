import { baseUrl } from "./index";

export const fetchDubaiOrders = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/foreign/order/user/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            },
            next: {
                revalidate: 10,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchFactors = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/order/factor/1/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            },
            next: {
                revalidate: 10,
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const SeenMessages = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/messages/user/all/seen/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchAddresses = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/user/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchFavoriteProducts = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/favorites/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const MakeDefaultAddress = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/set/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            },
            body: JSON.stringify({ id: id })
        });
        if (!response.ok) {
            throw new Error('Failed to set the address as default');
        }
        return response.json();
    } catch (error) {
        console.error('Error setting address as default:', error);
    }
};

export const DeleteAddress = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/delete/${id}/`, {
            method: 'DELETE', // Use the DELETE method for the request
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete the address. Please try again.');
        }
        return response.json();
        console.log("Address deleted successfully:", result);
    } catch (error) {
        console.error("Error deleting the address:", error);
    }
};

export const AddNewAddress = async (newAddress) => {
    try {
        const response = await fetch(`${baseUrl}/api/addresses/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            },
            body: JSON.stringify(newAddress),
        });
        if (!response.ok) {
            console.error('Error adding new address:', response.statusText);
        }
        return response.json();
    } catch (error) {
        console.error('Error sending data to the API:', error);
    }
};

export const fetchNotifications = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/messages/user/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchOrders = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/orders/user/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};
export const fetchActivties = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/orders/count/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};
export const fetchInformation = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/users/info/`, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzMTIzNjExLCJpYXQiOjE3MTMwMzcyMTEsImp0aSI6ImE2OTQxZTQ1OTcwMDQ0YWViZmEzMmVlMGFkMGZlODM4IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.98hDmHGHzx9jUSwpieTUvsme1KTvL2gHX8tsPNsJmNg`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};
