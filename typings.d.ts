interface Message {
    text: string;
    createdAt: admin.firestore.Trimestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}