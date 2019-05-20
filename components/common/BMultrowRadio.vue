<template>
	<radio-group @change="handleChange" class="BMultrowCheckbox-group">
		<li class="BMultrowCheckbox-group-item" v-for="row in listLen">
			<label class="" v-for="(index) in 3">
				<radio v-if="list[(row-1)*3+index-1]" :value="list[(row-1)*3+index-1].id" :checked="checkedIdsObj[list[(row-1)*3+index-1].id]" />
				<view v-if="list[(row-1)*3+index-1]" class="BMultrowCheckbox-checkboxText">
					{{list[(row-1)*3+index-1].name}}
				</view>
			</label>
		</li>
	</radio-group>
</template>

<script>
	export default {
		name: 'BMultrowRadio',
		props: {
			// checkbox列表
			list: {
				type: Array
			},
			//change事件
			radioCheckChange: {
				type: Function,
				default () {}
			},
			checkedIds: {
				type: String,
				default: ''
			}
		},
		data() {
			return {};
		},
		computed: {
			listLen() {
				return this.list.length ? ~~(this.list.length / 3) + 1 : 0;
			},
			checkedIdsObj(id) {
				return this.checkedId === id;
			}
		},
		methods: {
			handleChange({
				detail
			}) {
				this.$emit('update:checkedId', detail.value);
				// this.$emit(this.checkboxChange(detail));
				this.radioCheckChange && (this.radioCheckChange(detail));
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
