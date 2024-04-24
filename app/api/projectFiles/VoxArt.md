title: VoxArt
descriptiveTitle: VoxArt
description: Create beautiful presentations with just your voice
tags: next.js

---

# VoxArt

## Overview

### Create beautiful presentations with just your voice.

I have always wanted to dabble in content creation, but I have never found myself particularly good at wrestling with those fancy GUIs that come with video editing. With the rise of AI (muahaha) I figured that I could leverage my SWE skills to make a tool that could aid me in this content creator dream. I knew what I wanted to talk about and I wanted to remove the barrier of entry to people like myself that have a fleshed out idea but no video editing skills (and no patience to learn). So, instead of spending 10 hours to learn how to use premier pro, I spent 100+ making VoxArt. I hope you enjoy the story.

### The Vision

A video creation tool (notice I didn't say editor) that allows me to upload a voice memo and then spits out a video with visuals related to the content I was talking about alongside subtitles that match up with my voice. I was inspired by Fireship.io's style of videos where there are graphics related to the dialog to accompany his thoughts. I wanted it to be so easy such that if I got the idea for a video out in the park, I could record a voice memo and submit it to VoxArt and then have a completed video.

# Implementation

## The Tools

The crown jewel of this project is Remotion.js - it allows you to create and edit videos with code. Right up my alley. I use React at work - a lot - so it was only natural to select Next.js for this project. A simple and well documented full stack framework to support all my needs. It just so happens that these two things work together, and well too. I also needed a way to dictate the voice and figure out what the speech is about. After some research that I turned to whisper ai, a very capable platform with a generous free tier. I slapped in DaisyUI, my preferred UI library and got to work.

## Design

I would be lying if I said I drew up some UML to architect this app. To be frank, I did not think too much about where everything lived. I was more concerned with getting the features to work together (can you tell this is a post-mortem article?).