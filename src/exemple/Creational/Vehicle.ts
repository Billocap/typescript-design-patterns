interface Vehicle {
    deliver(cargo: string): void;
}

class Truck implements Vehicle {
    deliver(cargo: string) {
        console.log(`Delivered the ${cargo} throught land`);
    }
}

class Ship implements Vehicle {
    deliver(cargo: string) {
        console.log(`Delivered the ${cargo} throught sea`);
    }
}

class Plane implements Vehicle {
    deliver(cargo: string) {
        console.log(`Delivered the ${cargo} throught the air`);
    }
}

abstract class VehicleFactory {
    abstract createVehicle(): Vehicle;

    deliver(cargo: string) {
        const vehicle = this.createVehicle();

        vehicle.deliver(cargo);
    }
}

class TruckFactory extends VehicleFactory {
    createVehicle() {
        return new Truck();
    }
}

class ShipFactory extends VehicleFactory {
    createVehicle() {
        return new Ship();
    }
}

class PlaneFactory extends VehicleFactory {
    createVehicle() {
        return new Plane();
    }
}