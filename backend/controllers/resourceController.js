const ResourceCard = require('../models/ResourceCard');

// Get all resource cards (optionally filter by category)
const getResourceCards = async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category) {
            query.category = category;
        }
        const cards = await ResourceCard.find(query).sort({ createdAt: -1 });
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: 'Server error fetching resource cards' });
    }
};

// Create a new resource card
const createResourceCard = async (req, res) => {
    try {
        const newCard = new ResourceCard(req.body);
        const card = await newCard.save();
        res.json(card);
    } catch (err) {
        res.status(500).json({ message: 'Server error creating resource card' });
    }
};

// Update a resource card
const updateResourceCard = async (req, res) => {
    try {
        const card = await ResourceCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!card) return res.status(404).json({ message: 'Resource card not found' });
        res.json(card);
    } catch (err) {
        res.status(500).json({ message: 'Server error updating resource card' });
    }
};

// Delete a resource card
const deleteResourceCard = async (req, res) => {
    try {
        const card = await ResourceCard.findByIdAndDelete(req.params.id);
        if (!card) return res.status(404).json({ message: 'Resource card not found' });
        res.json({ message: 'Resource card deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error deleting resource card' });
    }
};

// Seed resources
const seedResources = async () => {
    try {
        const count = await ResourceCard.countDocuments();
        if (count === 0) {
            console.log("Seeding existing hardcoded resources to database...");

            const trainingCourses = [
                { category: "training", title: "Freelance Video Editing", duration: "6 Weeks", description: "Master video editing techniques and build a portfolio that attracts high-paying clients in the competitive freelance market.", students: 2387, image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop", link: "https://docs.google.com/document/d/1d9SWXt1R5txTmdfCma6biqEsloEILEvDYobj9qTcAog/edit?tab=t.0#heading=h.2rsnqid7p97c", level: "Beginner" },
                { category: "training", title: "Advanced Graphic Design", duration: "8 Weeks", description: "Dive deep into design theory, typography, and visual communication to create stunning designs that convert.", students: 2785, image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=200&fit=crop", link: "https://docs.google.com/document/d/1_WjogzgG6QUfWqtpIaLI2rrMqt9RJRmHXvRF4KrBIL4/edit?tab=t.0#heading=h.g8uhyrbs8yb5", level: "Advanced" },
                { category: "training", title: "Social Media Management", duration: "5 Weeks", description: "Learn to create engaging content, build communities, and drive business growth through strategic social media.", students: 2845, image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop", link: "https://docs.google.com/document/d/1RsRldCESIooUX5NbIo-RiU4EHbgfuzlbaJC_7hkDqsw/edit?tab=t.0#heading=h.12ejtjd6b4g0", level: "Intermediate" },
                { category: "training", title: "Virtual Assistant Skills", duration: "4 Weeks", description: "Become an indispensable VA with skills in project management, communication, and digital tools mastery.", students: 2985, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=200&fit=crop", link: "https://docs.google.com/document/d/1RsRldCESIooUX5NbIo-RiU4EHbgfuzlbaJC_7hkDqsw/edit?tab=t.0#heading=h.12ejtjd6b4g0", level: "Beginner" },
                { category: "training", title: "Simple Website Building", duration: "4 Weeks", description: "Build beautiful, functional websites without coding using modern tools and best practices for user experience.", students: 2845, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop", link: "https://docs.google.com/document/d/1kJzU6z4WqhpN9dJOiLOFuDUux3z_v4hxTzVDvWrWcJU/edit?tab=t.0#heading=h.on7thd22n0l5", level: "Beginner" }
            ];

            const edCourses = [
                { category: "education", title: "1st and 2nd Grade Educational Videos", description: "A curated playlist of fun and educational videos for children in 1st and 2nd grade.", students: 2598, level: "Beginner", duration: "7 videos", link: "https://www.youtube.com/playlist?list=PLMsX9836rE05_C8bL0CHQ351oTG5AvRhe", image: "https://img.youtube.com/vi/aUkgcHGo_8c/hqdefault.jpg" },
                { category: "education", title: "PreSchool Learning Videos", description: "Engaging videos designed to help preschoolers learn basic concepts in an enjoyable way.", students: 2356, level: "Beginner", duration: "13 videos", link: "https://www.youtube.com/playlist?list=PLMsX9836rE044x-U9QYdHuq2HKLloF9px", image: "https://img.youtube.com/vi/aUkgcHGo_8c/hqdefault.jpg" },
                { category: "education", title: "Kindergarten Learning Videos", description: "A collection of videos to prepare children for kindergarten, covering a range of essential skills.", students: 2789, level: "Beginner", duration: "29 videos", link: "https://www.youtube.com/playlist?list=PLMsX9836rE06s9Qp4CjchN7DY6rvY3cmT", image: "https://img.youtube.com/vi/aUkgcHGo_8c/hqdefault.jpg" }
            ];

            const langCourses = [
                { category: "language", language: "Hindi → English", title: "Learn English for Hindi Speakers", description: "Master English with lessons designed specifically for Hindi speakers. Build vocabulary, grammar, and confidence.", level: "Beginner to Advanced", students: 104, gradient: "bg-gradient-to-br from-orange-500 to-green-600", link: "https://drive.google.com/file/d/1QbJvIJF7RH4abhd6ka02F42aawm41Nae/view?usp=sharing", image: "6.png" },
                { category: "language", language: "Urdu → English", title: "Learn English for Urdu Speakers", description: "Comprehensive English course tailored for Urdu speakers with cultural context and practical examples.", level: "All Levels", students: 98, gradient: "bg-gradient-to-br from-green-600 to-emerald-700", link: "https://drive.google.com/file/d/1tWRi30YEoapxvVfafh3qzd0gB3Thv8bJ/view?usp=sharing", image: "1.png" },
                { category: "language", language: "Chinese → English", title: "Learn English for Chinese Speakers", description: "Bridge the language gap with English lessons focusing on pronunciation, grammar, and practical communication.", level: "Beginner", students: 45, gradient: "bg-gradient-to-br from-red-600 to-yellow-500", link: "https://drive.google.com/file/d/13UrPW-0ZIEtenzV1XS_OENoVtTMFmgpk/view?usp=sharing", image: "3.png" },
                { category: "language", language: "Spanish → English", title: "Learn English for Spanish Speakers", description: "Accelerate your English learning with courses designed to help Spanish speakers master English effectively.", level: "Intermediate", students: 86, gradient: "bg-gradient-to-br from-yellow-500 to-red-500", link: "https://drive.google.com/file/d/1iA6aTFivzYT7QazQ4ygoCGzCPxap7RkH/view?usp=sharing", image: "4.png" },
                { category: "language", language: "French → English", title: "Learn English for French Speakers", description: "Perfect your English with specialized lessons that address common challenges for French speakers.", level: "Beginner to Intermediate", students: 37, gradient: "bg-gradient-to-br from-blue-600 to-purple-600", link: "https://drive.google.com/file/d/19msRalxB2mm2IHQCAUqIL77K7K8RXstX/view?usp=sharing", image: "5.png" }
            ];

            await ResourceCard.insertMany([...trainingCourses, ...edCourses, ...langCourses]);
            console.log("Seeding complete!");
        }
    } catch (err) {
        console.error("Error seeding resource cards", err);
    }
}

module.exports = { getResourceCards, createResourceCard, updateResourceCard, deleteResourceCard, seedResources };
