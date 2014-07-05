#!/usr/bin/python

from os import walk
from os.path import join
import json

filelist = []
files_to_ignore = json.load(open("testignore.json"))

for path, folders, files in walk("."):
    if path == ".": continue
    filelist += [join(path, file_) for file_ in files if not join(path, file_) in files_to_ignore]

json.dump({"files": filelist}, open("testlist.json", "w"))