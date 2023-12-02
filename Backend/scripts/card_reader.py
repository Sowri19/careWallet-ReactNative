import serial
import time
import aiohttp
import asyncio
import threading


def readserial(comport, baudrate):
    ser = serial.Serial(
        comport, baudrate, timeout=0.1
    )  # 1/timeout is the frequency at which the port is read

    card_id = None
    doctor_id = None

    while True:
        data = ser.readline().decode().strip()
        if data:
            # print(data)
            if data == "3" or data == "2" or data == "1":
                print(data)
            if data.startswith("Didn't find PN53x board"):
                print("Please connect your CareWallet card reader")
            if data.startswith("Waiting for an ISO14443A Card ...") or data.startswith(
                "Ready to tap"
            ):
                print("CareWallet patient, please tap your device.")
            if data.startswith("UID Value:"):
                card_id = data.split(": ")[1]
            if data.startswith("Card Reader Device ID:"):
                doctor_id = data.split(": ")[1]
        if card_id and doctor_id:
            print(f"Card ID: {card_id}")
            print(f"Doctor ID: {doctor_id}")
            print("Signing in new patient...")
            threading.Thread(
                target=asyncio.run, args=(visit_doctor(card_id, doctor_id),)
            ).start()

            # reset card data
            card_id = None
            doctor_id = None


async def visit_doctor(card_id: str, doctor_id: str):
    headers = {"Content-Type": "application/json"}

    payload = {"patientID": card_id, "doctorID": doctor_id}

    async with aiohttp.ClientSession() as session:
        async with session.post(
            "http://localhost:3000/visits", headers=headers, json=payload
        ) as response:
            data = await response.json()
            patient_first_name = data.get("patientFirstName")
            print(f"Hello {patient_first_name}, you will be treated very soon.")


if __name__ == "__main__":
    readserial("/dev/cu.usbmodem101", 115200)
