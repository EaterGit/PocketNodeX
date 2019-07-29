const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");
const Vector3 = require("../../../math/Vector3");

class LevelSoundEventPacket extends DataPacket {
    
    static getId() {
        return ProtocolInfo.LEVEL_SOUND_EVENT_PACKET;
    }

    static get SOUND_ITEM_USE_ON() {return 0};
    static get SOUND_HIT() {return 1};
    static get SOUND_STEP() {return 2};
    static get SOUND_FLY() {return 3};
    static get SOUND_JUMP() {return 4};
    static get SOUND_BREAK() {return 5};
    static get SOUND_PLACE() {return 6};
    static get SOUND_HEAVY_STEP() {return 7};
    static get SOUND_GALLOP() {return 8};
    static get SOUND_FALL() {return 9};
    static get SOUND_AMBIENT() {return 10};
    static get SOUND_AMBIENT_BABY() {return 11};
    static get SOUND_AMBIENT_IN_WATER() {return 12};
    static get SOUND_BREATHE() {return 13};
    static get SOUND_DEATH() {return 14};
    static get SOUND_DEATH_IN_WATER() {return 15};
    static get SOUND_DEATH_TO_ZOMBIE() {return 16};
    static get SOUND_HURT() {return 17};
    static get SOUND_HURT_IN_WATER() {return 18};
    static get SOUND_MAD() {return 19};
    static get SOUND_BOOST() {return 20};
    static get SOUND_BOW() {return 21};
    static get SOUND_SQUISH_BIG() {return 22};
    static get SOUND_SQUISH_SMALL() {return 23};
    static get SOUND_FALL_BIG() {return 24};
    static get SOUND_FALL_SMALL() {return 25};
    static get SOUND_SPLASH() {return 26};
    static get SOUND_FIZZ() {return 27};
    static get SOUND_FLAP() {return 28};
    static get SOUND_SWIM() {return 29};
    static get SOUND_DRINK() {return 30};
    static get SOUND_EAT() {return 31};
    static get SOUND_TAKEOFF() {return 32};
    static get SOUND_SHAKE() {return 33};
    static get SOUND_PLOP() {return 34};
    static get SOUND_LAND() {return 35};
    static get SOUND_SADDLE() {return 36};
    static get SOUND_ARMOR() {return 37};
    static get SOUND_ADD_CHEST() {return 38};
    static get SOUND_THROW() {return 39};
    static get SOUND_ATTACK() {return 40};
    static get SOUND_ATTACK_NODAMAGE() {return 41};
    static get SOUND_ATTACK_STRONG() {return 42};
    static get SOUND_WARN() {return 43};
    static get SOUND_SHEAR() {return 44};
    static get SOUND_MILK() {return 45};
    static get SOUND_THUNDER() {return 46};
    static get SOUND_EXPLODE() {return 47};
    static get SOUND_FIRE() {return 48};
    static get SOUND_IGNITE() {return 49};
    static get SOUND_FUSE() {return 50};
    static get SOUND_STARE() {return 51};
    static get SOUND_SPAWN() {return 52};
    static get SOUND_SHOOT() {return 53};
    static get SOUND_BREAK_BLOCK() {return 54};
    static get SOUND_LAUNCH() {return 55};
    static get SOUND_BLAST() {return 56};
    static get SOUND_LARGE_BLAST() {return 57};
    static get SOUND_TWINKLE() {return 58};
    static get SOUND_REMEDY() {return 59};
    static get SOUND_UNFECT() {return 60};
    static get SOUND_LEVELUP() {return 61};
    static get SOUND_BOW_HIT() {return 62};
    static get SOUND_BULLET_HIT() {return 63};
    static get SOUND_EXTINGUISH_FIRE() {return 64};
    static get SOUND_ITEM_FIZZ() {return 65};
    static get SOUND_CHEST_OPEN() {return 66};
    static get SOUND_CHEST_CLOSED() {return 67};
    static get SOUND_SHULKERBOX_OPEN() {return 68};
    static get SOUND_SHULKERBOX_CLOSED() {return 69};
    static get SOUND_POWER_ON() {return 70};
    static get SOUND_POWER_OFF() {return 71};
    static get SOUND_ATTACH() {return 72};
    static get SOUND_DETACH() {return 73};
    static get SOUND_DENY() {return 74};
    static get SOUND_TRIPOD() {return 75};
    static get SOUND_POP() {return 76};
    static get SOUND_DROP_SLOT() {return 77};
    static get SOUND_NOTE() {return 78};
    static get SOUND_THORNS() {return 79};
    static get SOUND_PISTON_IN() {return 80};
    static get SOUND_PISTON_OUT() {return 81};
    static get SOUND_PORTAL() {return 82};
    static get SOUND_WATER() {return 83};
    static get SOUND_LAVA_POP() {return 84};
    static get SOUND_LAVA() {return 85};
    static get SOUND_BURP() {return 86};
    static get SOUND_BUCKET_FILL_WATER() {return 87};
    static get SOUND_BUCKET_FILL_LAVA() {return 88};
    static get SOUND_BUCKET_EMPTY_WATER() {return 89};
    static get SOUND_BUCKET_EMPTY_LAVA() {return 90};
    static get SOUND_RECORD_13() {return 91};
    static get SOUND_RECORD_CAT() {return 92};
    static get SOUND_RECORD_BLOCKS() {return 93};
    static get SOUND_RECORD_CHIRP() {return 94};
    static get SOUND_RECORD_FAR() {return 95};
    static get SOUND_RECORD_MALL() {return 96};
    static get SOUND_RECORD_MELLOHI() {return 97};
    static get SOUND_RECORD_STAL() {return 98};
    static get SOUND_RECORD_STRAD() {return 99};
    static get SOUND_RECORD_WARD() {return 100};
    static get SOUND_RECORD_11() {return 101};
    static get SOUND_RECORD_WAIT() {return 102};
    static get SOUND_GUARDIAN_FLOP() {return 104};
    static get SOUND_ELDERGUARDIAN_CURSE() {return 105};
    static get SOUND_MOB_WARNING() {return 106};
    static get SOUND_MOB_WARNING_BABY() {return 107};
    static get SOUND_TELEPORT() {return 108};
    static get SOUND_SHULKER_OPEN() {return 109};
    static get SOUND_SHULKER_CLOSE() {return 110};
    static get SOUND_HAGGLE() {return 111};
    static get SOUND_HAGGLE_YES() {return 112};
    static get SOUND_HAGGLE_NO() {return 113};
    static get SOUND_HAGGLE_IDLE() {return 114};
    static get SOUND_CHORUSGROW() {return 115};
    static get SOUND_CHORUSDEATH() {return 116};
    static get SOUND_GLASS() {return 117};
    static get SOUND_CAST_SPELL() {return 118};
    static get SOUND_PREPARE_ATTACK() {return 119};
    static get SOUND_PREPARE_SUMMON() {return 120};
    static get SOUND_PREPARE_WOLOLO() {return 121};
    static get SOUND_FANG() {return 122};
    static get SOUND_CHARGE() {return 123};
    static get SOUND_CAMERA_TAKE_PICTURE() {return 124};
    static get SOUND_LEASHKNOT_PLACE() {return 125};
    static get SOUND_LEASHKNOT_BREAK() {return 126};
    static get SOUND_GROWL() {return 127};
    static get SOUND_WHINE() {return 128};
    static get SOUND_PANT() {return 129};
    static get SOUND_PURR() {return 130};
    static get SOUND_PURREOW() {return 131};
    static get SOUND_DEATH_MIN_VOLUME() {return 132};
    static get SOUND_DEATH_MID_VOLUME() {return 133};
    static get SOUND_IMITATE_BLAZE() {return 134};
    static get SOUND_IMITATE_CAVE_SPIDER() {return 135};
    static get SOUND_IMITATE_CREEPER() {return 136};
    static get SOUND_IMITATE_ELDER_GUARDIAN() {return 137};
    static get SOUND_IMITATE_ENDER_DRAGON() {return 138};
    static get SOUND_IMITATE_ENDERMAN() {return 139};
    static get SOUND_IMITATE_EVOCATION_ILLAGER() {return 141};
    static get SOUND_IMITATE_GHAST() {return 142};
    static get SOUND_IMITATE_HUSK() {return 143};
    static get SOUND_IMITATE_ILLUSION_ILLAGER() {return 144};
    static get SOUND_IMITATE_MAGMA_CUBE() {return 145};
    static get SOUND_IMITATE_POLAR_BEAR() {return 146};
    static get SOUND_IMITATE_SHULKER() {return 147};
    static get SOUND_IMITATE_SILVERFISH() {return 148};
    static get SOUND_IMITATE_SKELETON() {return 149};
    static get SOUND_IMITATE_SLIME() {return 150};
    static get SOUND_IMITATE_SPIDER() {return 151};
    static get SOUND_IMITATE_STRAY() {return 152};
    static get SOUND_IMITATE_VEX() {return 153};
    static get SOUND_IMITATE_VINDICATION_ILLAGER() {return 154};
    static get SOUND_IMITATE_WITCH() {return 155};
    static get SOUND_IMITATE_WITHER() {return 156};
    static get SOUND_IMITATE_WITHER_SKELETON() {return 157};
    static get SOUND_IMITATE_WOLF() {return 158};
    static get SOUND_IMITATE_ZOMBIE() {return 159};
    static get SOUND_IMITATE_ZOMBIE_PIGMAN() {return 160};
    static get SOUND_IMITATE_ZOMBIE_VILLAGER() {return 161};
    static get SOUND_BLOCK_END_PORTAL_FRAME_FILL() {return 162};
    static get SOUND_BLOCK_END_PORTAL_SPAWN() {return 163};
    static get SOUND_RANDOM_ANVIL_USE() {return 164};
    static get SOUND_BOTTLE_DRAGONBREATH() {return 165};
    static get SOUND_DEFAULT() {return 166};
    static get SOUND_UNDEFINED() {return 167};

    initVars(){
        this.sound = -1;
        this.position = new Vector3();
        this.extraData = -1;
        this.entityType = ":"; //???
        this.isBabyMob = false; //...
        this.disableRelativeVolume = false;
    }

    _decodePayload() {
        this.sound = this.readUnsignedVarInt();
        this.position = this.getVector3Obj();
        this.extraData = this.readVarInt();
        this.entityType = this.readString();
        this.isBabyMob = this.readBool();
        this.disableRelativeVolume = this.readBool();
    }

    _encodePayload() {
        this.writeUnsignedVarInt(this.sound);
        this.writeVector3Obj(this.position);
        this.writeVarInt(this.extraData);
        this.writeString(this.entityType);
        this.writeBool(this.isBabyMob);
        this.writeBool(this.disableRelativeVolume);
    }

    handle(session){
        return session.handleLevelSoundEvent(this);
    }
}
module.exports = LevelSoundEventPacket;