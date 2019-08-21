const LoginPacket = require("./LoginPacket");
const AnimatePacket = require("./AnimatePacket");
// const SetEntityDataPacket = require("./SetEntityDataPacket");
const PlayStatusPacket = require("./PlayStatusPacket");
const DisconnectPacket = require("./DisconnectPacket");
const MovePlayerPacket = require("./MovePlayerPacket");
const NetworkStackLatencyPacket = require("./NetworkStackLatencyPacket");
const PlayerActionPacket = require("./PlayerActionPacket");
const InteractPacket = require("./InteractPacket");
const LevelSoundEventPacket = require("./LevelSoundEventPacket");
const SubClientLoginPacket = require("./SubClientLoginPacket");
const PlayerSkinPacket = require("./PlayerSkinPacket");
const BlockEventPacket = require("./BlockEventPacket");
const UpdateAttributesPacket = require("./UpdateAttributesPacket");
const StructureBlockUpdatePacket = require("./StructureBlockUpdatePacket");
const ResourcePackClientResponsePacket = require("./ResourcePackClientResponsePacket");
const ResourcePackStackPacket = require("./ResourcePackStackPacket");
const ResourcePacksInfoPacket = require("./ResourcePacksInfoPacket");
const ResourcePackChunkRequestPacket = require("./ResourcePackChunkRequestPacket");
const ServerToClientHandshakePacket = require("./ServerToClientHandshakePacket");
const SetScoreboardIdentityPacket = require("./SetScoreboardIdentityPacket");
const ClientToServerHandshakePacket = require("./ClientToServerHandshakePacket");
const RequestChunkRadiusPacket = require("./RequestChunkRadiusPacket");
const UpdateSoftEnumPacket = require("./UpdateSoftEnumPacket");
const SetLocalPlayerAsInitializedPacket = require("./SetLocalPlayerAsInitializedPacket");
const StartGamePacket = require("./StartGamePacket");
const SetTimePacket = require("./SetTimePacket");
const BiomeDefinitionListPacket = require("./BiomeDefinitionListPacket");
const CommandOutputPacket = require("./CommandOutputPacket");
const CommandRequestPacket = require("./CommandRequestPacket");
const TextPacket = require("./TextPacket");
const SetDefaultGameTypePacket = require("./SetDefaultGameTypePacket");
const SetPlayerGameTypePacket = require("./SetPlayerGameTypePacket");
const AddPlayerPacket = require("./AddPlayerPacket");
const ActorEventPacket = require("./ActorEventPacket");
const AddActorPacket = require("./AddActorPacket");
const RemoveActorPacket = require("./RemoveActorPacket");
const AddItemActorPacket = require("./AddItemActorPacket");
const AddPaintingPacket = require("./AddPaintingPacket");
const AvailableCommandsPacket = require("./AvailableCommandsPacket");
const AutomationClientConnectPacket = require("./AutomationClientConnectPacket");
const TakeItemActorPacket = require("./TakeItemActorPacket");
const MoveActorAbsolutePacket = require("./MoveActorAbsolutePacket");
const RiderJumpPacket = require("./RiderJumpPacket");
const UpdateBlockPacket = require("./UpdateBlockPacket");
const SetTitlePacket = require("./SetTitlePacket");
const ExplodePacket = require("./ExplodePacket");
const LevelSoundEventPacketV1 = require("./LevelSoundEventPacketV1");

class PacketPool {

    constructor(){
        this.packetPool = new Map();
        this.registerPackets();
    }

    registerPacket(packet){
        this.packetPool.set(packet.getId(), packet);
    }

    getPacket(id){
        return this.packetPool.has(id) ? new (this.packetPool.get(id))() : null;
    }

    isRegistered(id){
        return this.packetPool.has(id);
    }

    registerPackets(){
        this.registerPacket(LoginPacket);
        this.registerPacket(PlayStatusPacket);
        this.registerPacket(ServerToClientHandshakePacket);
        this.registerPacket(ClientToServerHandshakePacket);
        this.registerPacket(DisconnectPacket);
        this.registerPacket(ResourcePacksInfoPacket);
        this.registerPacket(ResourcePackStackPacket);
        this.registerPacket(ResourcePackClientResponsePacket);
        this.registerPacket(TextPacket);
        this.registerPacket(SetTimePacket);
        this.registerPacket(StartGamePacket);
        this.registerPacket(AddPlayerPacket);
        this.registerPacket(AddActorPacket);
        this.registerPacket(RemoveActorPacket);
        this.registerPacket(AddItemActorPacket);
        this.registerPacket(TakeItemActorPacket);
        this.registerPacket(MoveActorAbsolutePacket);
        this.registerPacket(MovePlayerPacket);
        this.registerPacket(RiderJumpPacket);
        this.registerPacket(UpdateBlockPacket);
        this.registerPacket(AddPaintingPacket);
        this.registerPacket(ExplodePacket);
        this.registerPacket(LevelSoundEventPacketV1);
        this.registerPacket(LevelSoundEventPacket);
        this.registerPacket(PlayerActionPacket);
        this.registerPacket(ActorEventPacket);
        this.registerPacket(UpdateAttributesPacket);
        this.registerPacket(InteractPacket);
        this.registerPacket(UpdateSoftEnumPacket);
        this.registerPacket(AnimatePacket);
        this.registerPacket(PlayerSkinPacket);
        this.registerPacket(SetScoreboardIdentityPacket);
        // this.registerPacket(SetEntityDataPacket);
        this.registerPacket(BlockEventPacket);
        this.registerPacket(SetLocalPlayerAsInitializedPacket);
        this.registerPacket(SetDefaultGameTypePacket);
        this.registerPacket(SetPlayerGameTypePacket);
        this.registerPacket(NetworkStackLatencyPacket);
        this.registerPacket(StructureBlockUpdatePacket);
        this.registerPacket(SubClientLoginPacket);
        this.registerPacket(ResourcePackChunkRequestPacket);
        this.registerPacket(BiomeDefinitionListPacket);
        this.registerPacket(RequestChunkRadiusPacket);
        this.registerPacket(CommandOutputPacket);
        this.registerPacket(CommandRequestPacket);
        this.registerPacket(AvailableCommandsPacket);
        this.registerPacket(AutomationClientConnectPacket);
        this.registerPacket(SetTitlePacket);
    }
}

module.exports = PacketPool;