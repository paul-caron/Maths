export const test = (a, b) => a + b;

export class Vector {
    constructor(x, y, z, w=1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    

    static subtract(vec1, vec2) {
        return new Vector(vec1.x - vec2.x, vec1.y - vec2.y, vec1.z - vec2.z);
    }

    static add(vec1, vec2) {
        return new Vector(vec1.x + vec2.x, vec1.y + vec2.y, vec1.z + vec2.z);
    }

    static cross(vec1, vec2) {
        let x = vec1.y * vec2.z - vec1.z * vec2.y;
        let y = vec1.z * vec2.x - vec1.x * vec2.z;
        let z = vec1.x * vec2.y - vec1.y * vec2.x;
        return new Vector(x, y, z);
    }

    static dot(vec1, vec2) {
        let x = vec1.x * vec2.x;
        let y = vec1.y * vec2.y;
        let z = vec1.z * vec2.z;
        return x + y + z;
    }

    static mul(vec, k) {
        let x = vec.x * k;
        let y = vec.y * k;
        let z = vec.z * k;
        return new Vector(x, y, z);
    }

    normalize() {
        let l = hypot(this.x, this.y, this.z);
        this.x /= l; this.y /= l; this.z /= l;
    }
}
