import face_recognition as fr
#import os
import cv2
import face_recognition
import numpy as np
#from time import sleep


def get_encoded_faces():
    """
    looks through the faces folder and encodes all
    the faces

    :return: dict of (name, image encoded)
    """
    encoded = {}  # dictionary with key as name of person and value as list of face encodings

    for dirpath, dnames, fnames in os.walk("./faces"):
        for f in fnames:
            if f.endswith(".jpg") or f.endswith(".png"):
                face = fr.load_image_file("faces/" + f)
                encoding = fr.face_encodings(face)[0]
                # returns a list of 128 dimensional face encodings -one for each face in image,here we do [0] to get the first face which is the only face since we are giving it single face images
                encoded[f.split(".")[0]] = encoding
                # to store name-encoding pair in encoded dictionary

    return encoded


def unknown_image_encoded(img):
    """
    encode a face given the file name
    """
    face = fr.load_image_file("faces/" + img)

    encoding = fr.face_encodings(face)[0]

    return encoding


def test_img(im):
    img = cv2.imread(im, 1)
    img = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)
    cv2.putText(img, 'test', (left - 20, bottom + 20),
                font, 0.8, (255, 255, 255), 1)
    cv2.imwrite(
        'C:/Users/Samyukta/Desktop/Samyukta/sem_5/attendance/test.jpg', img)
    return 'success'


def classify_face(im, face, faces_encoded, known_face_names):
    """
    will find all of the faces in a given image and label
    them if it knows what they are

    :param im: str of file path
    :return: list of face names
    """

    img = cv2.imread(im, 1)
    img = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)

    #img = img[:, :, ::-1]

    face_locations = face_recognition.face_locations(img)
    # returns list of bounding boxes values in css order(top,right,bottom,left) of human faces detected in image
    # we can specify model to be used for face detection in parameters, default is hog which is less accurate but faster in CPU, if machine gpu enabled, can use model cnn
    unknown_face_encodings = face_recognition.face_encodings(
        img, face_locations)
    # returns a list of 128 dimensional face encodings for all detected faces in image, they are all first stored in unknown_face_enodings

    face_names = []
    for face_encoding in unknown_face_encodings:
        # See if the face is a match for the known face(s)
        matches = face_recognition.compare_faces(
            faces_encoded, face_encoding, tolerance=0.52)
        # first parameter is list of known face encodings, second is encoding of a single face to compare against the list, third is tolerance i.e distance to consider match,lower is more strict, 0.6 default generally givs best performance
        # matches is a list of true/false values with value true if any of the faces_encoded values match with the current face being considered
        name = "Unknown"

        # use the known face with the smallest distance to the new face
        face_distances = face_recognition.face_distance(
            faces_encoded, face_encoding)
        # returns a numpy array with euclidean distance between all the faces in the list and the current face being considered
        best_match_index = np.argmin(face_distances)
        # returns the index of minimum value in face_distances array
        if matches[best_match_index]:
            name = known_face_names[best_match_index]

        face_names.append(name)

        for (top, right, bottom, left), name in zip(face_locations, face_names):
            if name == "Unknown":
                continue
            # Draw a box around the face
            cv2.rectangle(img, (left-20, top-20),
                          (right+20, bottom+20), (255, 0, 0), 2)

            # Draw a label with a name below the face
            cv2.rectangle(img, (left-20, bottom + 5),
                          (right+20, bottom+20), (255, 0, 0), cv2.FILLED)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(img, name, (left - 20, bottom + 20),
                        font, 0.8, (255, 255, 255), 1)
            # the coordinates=bottom left corner of text in img,0.8=fontscale,1=thickness of lines

    return img
    # Display the resulting image
    '''while True:

        cv2.imshow('Video', img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            return face_names
    '''


def recognize_face():

    faces = get_encoded_faces()
    print('done')
    faces_encoded = list(faces.values())
    # making a list of all the face encodings of known faces
    known_face_names = list(faces.keys())
    # making a list of all the known names which are the keys of the dict
    path = "C:/Users/Samyukta/Desktop/Samyukta/sem_5/face_rec/results/"
    for dirpath, dnames, fnames in os.walk("./test"):
        for f in fnames:

            img = classify_face(
                "test/"+f, faces, faces_encoded, known_face_names)
            cv2.imwrite(os.path.join(path, f), img)


'''
faces = {}
faces_encoded = []
known_face_names = []
recognize_face()
'''
