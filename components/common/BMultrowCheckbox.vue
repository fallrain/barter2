<template>
	<checkbox-group @change="handleChange" class="BMultrowCheckbox-group">
		<li class="BMultrowCheckbox-group-item" v-for="row in listLen">
			<label class="BMultrowCheckbox-group-label" v-for="(index) in 3">
				<checkbox v-if="list[(row-1)*3+index-1]" :value="list[(row-1)*3+index-1].id" :checked="checkedIdsObj[list[(row-1)*3+index-1].id]" />
				<view v-if="list[(row-1)*3+index-1]" class="BMultrowCheckbox-checkboxText">
					{{list[(row-1)*3+index-1].name}}
				</view>
			</label>
		</li>
	</checkbox-group>
</template>

<script>
	export default {
		name: 'BMultrowCheckbox',
		props: {
			// checkbox列表
			list: {
				type: Array
			},
			//change事件
			checkboxChange: {
				type: Function,
				default () {}
			},
			checkedIds: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data() {
			return {};
		},
		computed: {
			listLen() {
				if (!this.list.length) {
					return 0
				}
				return this.list.length % 3 ? ~~(this.list.length / 3) + 1 : this.list.length / 3;
			},
			checkedIdsObj() {
				const obj = {};
				this.checkedIds.forEach(v => {
					obj[v] = true;
				});
				return obj;
			}
		},
		methods: {
			handleChange({
				detail
			}) {
				this.$emit('update:checkedIds', detail.value);
				// this.$emit(this.checkboxChange(detail));
				this.checkboxChange && (this.checkboxChange(detail));
			}
		}
	}
</script>

<style lang="scss">
	.BMultrowCheckbox-group {
		width: 100%;
	}

	.BMultrowCheckbox-group-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80upx;
		border-bottom: 1px solid #eee;

		&:last-child {
			border-bottom: 0;
		}
	}

	.BMultrowCheckbox-group-label {
		width: 33%;
	}

	.BMultrowCheckbox-checkboxText {
		display: inline-block;
		vertical-align: middle;
		margin-left: 10upx;
		max-width: 160upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
