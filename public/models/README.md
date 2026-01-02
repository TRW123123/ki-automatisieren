# 3D Models Directory

Place your GLB/GLTF files here for use with the Hero3D component.

## Expected files:
- `ai-cube.glb` - Main AI cube model with Draco compression

## Optimization tips:
1. Use Draco compression for smaller file sizes
2. Keep polygon count under 50k for good performance
3. Use texture atlasing to reduce draw calls
4. Consider using compressed textures (KTX2)

## Tools:
- [gltf-transform](https://gltf-transform.donmccurdy.com/) for optimization
- [Draco encoder](https://github.com/google/draco) for compression