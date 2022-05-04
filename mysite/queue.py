from multiprocessing import Process
import os
import time
import speech_recognition as sr

def speech_to_text():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        # read the audio data from the default microphone
        audio_data = r.record(source, duration=5)
        print("Recognizing...")
        # convert speech to text
        text = r.recognize_google(audio_data)
        print(text)
        time.sleep(0.1)



if __name__ == "__main__":
    processes = []
    num_processes = os.cpu_count()

    for i in range(num_processes):
        p = Process(target=speech_to_text)
        processes.append(p)

    for p in processes:
        print("process "+ str(p) +" started")
        p.start()

    for p in processes:
        print("process " + str(p) + " joined")
        p.join()


