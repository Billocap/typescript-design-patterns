interface SocialNetwork {
    createFriendsIterator(id: number): ProfileIterator;
    createCoworkersIterator(id: number): ProfileIterator;
}

class Facebook implements SocialNetwork {
    createFriendsIterator(id: number): ProfileIterator {
        return new FacebookIterator(this, 0);
    }

    createCoworkersIterator(id: number): ProfileIterator {
        return new FacebookIterator(this, 0);
    }
}

interface ProfileIterator {
    getNext(): Profile;
    hasMore(): boolean;
}

class FacebookIterator implements ProfileIterator {
    private facebook: SocialNetwork;
    private profileId: number;
    private currentPosition;
    private cache: Profile[];

    constructor(network: SocialNetwork, id: number) {
        this.facebook = network;
        this.profileId = id;
    }

    private lazyInit() {}

    getNext(): Profile {
        return new Profile(0);
    }

    hasMore(): boolean {
        return true;
    }
}

class Profile {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
}

class SocialSpammer {
    send(iterator: FacebookIterator, message: string) {}
}

class App {
    private spammer;
    private network;

    sendSpamToFriends(profile: Profile) {}

    sendSpamToCoworkers(profile: Profile) {}
}